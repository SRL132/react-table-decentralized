import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { JobAdded } from "../generated/Jobs/Jobs"

export function createJobAddedEvent(
  id: BigInt,
  originalId: string,
  operatingUnit: string,
  officePostalCode: string,
  totalHours: BigInt,
  clientId: string,
  isUnassigned: boolean
): JobAdded {
  let jobAddedEvent = changetype<JobAdded>(newMockEvent())

  jobAddedEvent.parameters = new Array()

  jobAddedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam("originalId", ethereum.Value.fromString(originalId))
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam(
      "operatingUnit",
      ethereum.Value.fromString(operatingUnit)
    )
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam(
      "officePostalCode",
      ethereum.Value.fromString(officePostalCode)
    )
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam(
      "totalHours",
      ethereum.Value.fromUnsignedBigInt(totalHours)
    )
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam("clientId", ethereum.Value.fromString(clientId))
  )
  jobAddedEvent.parameters.push(
    new ethereum.EventParam(
      "isUnassigned",
      ethereum.Value.fromBoolean(isUnassigned)
    )
  )

  return jobAddedEvent
}
