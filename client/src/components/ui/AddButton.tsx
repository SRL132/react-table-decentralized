import React, { useState } from "react";
import AddModal from "./AddModal";
import { EntityConfig, FieldConfig } from "../config/main/schema";
import { ethers } from "ethers";
import { MetaMaskInpageProvider } from "@metamask/providers";

import abi from "../../utils/jobs.json";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}
type AddButtonProps = {
  className: string;
  entityConfig: EntityConfig;
};

const AddButton = ({ className, entityConfig }: AddButtonProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddJob = async (formData: Record<string, FieldConfig>) => {
    if (window.ethereum == undefined) {
      alert("Metamask wallet is not installed");
      return;
    }

    const contractABI = abi.abi; // replace with your contract ABI
    const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
    const privateKey = process.env.REACT_APP_PRIVATE_KEY as string;

    // Initialize the provider and signer
    const provider = new ethers.JsonRpcProvider(
      process.env.REACT_APP_MUMBAI_RPC_URL
    );
    const signer = new ethers.Wallet(privateKey, provider);

    // Initialize the contract
    const jobsContract = new ethers.Contract(
      contractAddress as string,
      contractABI,
      signer
    );
    try {
      // Extract the values from formData
      const {
        originalId,
        operatingUnit,
        officePostalCode,
        totalHours,
        clientId,
        isUnassigned,
      } = formData;

      // Call the addJob function
      const tx = await jobsContract.addJob(
        originalId,
        operatingUnit,
        officePostalCode,
        totalHours,
        clientId,
        isUnassigned
      );

      // Wait for the transaction to be mined
      const receipt = await tx.wait();

      console.log("Transaction was successful, receipt:", receipt);
    } catch (error) {
      console.error("Failed to add job:", error);
    }
  };
  return (
    <>
      <button
        onClick={handleButtonClick}
        className={`btn btn-primary bg-warning text-dark ${className}`}
      >
        Add Job
      </button>
      {showModal && (
        <AddModal
          entityConfig={entityConfig}
          onSubmit={handleAddJob}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default AddButton;
