// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class JobAdded extends ethereum.Event {
  get params(): JobAdded__Params {
    return new JobAdded__Params(this);
  }
}

export class JobAdded__Params {
  _event: JobAdded;

  constructor(event: JobAdded) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get originalId(): string {
    return this._event.parameters[1].value.toString();
  }

  get operatingUnit(): string {
    return this._event.parameters[2].value.toString();
  }

  get officePostalCode(): string {
    return this._event.parameters[3].value.toString();
  }

  get totalHours(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get clientId(): string {
    return this._event.parameters[5].value.toString();
  }

  get isUnassigned(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }
}

export class Jobs__jobsResult {
  value0: BigInt;
  value1: string;
  value2: string;
  value3: string;
  value4: BigInt;
  value5: string;
  value6: boolean;

  constructor(
    value0: BigInt,
    value1: string,
    value2: string,
    value3: string,
    value4: BigInt,
    value5: string,
    value6: boolean,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromString(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getOriginalId(): string {
    return this.value1;
  }

  getOperatingUnit(): string {
    return this.value2;
  }

  getOfficePostalCode(): string {
    return this.value3;
  }

  getTotalHours(): BigInt {
    return this.value4;
  }

  getClientId(): string {
    return this.value5;
  }

  getIsUnassigned(): boolean {
    return this.value6;
  }
}

export class Jobs extends ethereum.SmartContract {
  static bind(address: Address): Jobs {
    return new Jobs("Jobs", address);
  }

  jobs(param0: BigInt): Jobs__jobsResult {
    let result = super.call(
      "jobs",
      "jobs(uint256):(uint256,string,string,string,uint256,string,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new Jobs__jobsResult(
      result[0].toBigInt(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBigInt(),
      result[5].toString(),
      result[6].toBoolean(),
    );
  }

  try_jobs(param0: BigInt): ethereum.CallResult<Jobs__jobsResult> {
    let result = super.tryCall(
      "jobs",
      "jobs(uint256):(uint256,string,string,string,uint256,string,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Jobs__jobsResult(
        value[0].toBigInt(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBigInt(),
        value[5].toString(),
        value[6].toBoolean(),
      ),
    );
  }

  number(): BigInt {
    let result = super.call("number", "number():(uint256)", []);

    return result[0].toBigInt();
  }

  try_number(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("number", "number():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddJobCall extends ethereum.Call {
  get inputs(): AddJobCall__Inputs {
    return new AddJobCall__Inputs(this);
  }

  get outputs(): AddJobCall__Outputs {
    return new AddJobCall__Outputs(this);
  }
}

export class AddJobCall__Inputs {
  _call: AddJobCall;

  constructor(call: AddJobCall) {
    this._call = call;
  }

  get originalId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get operatingUnit(): string {
    return this._call.inputValues[1].value.toString();
  }

  get officePostalCode(): string {
    return this._call.inputValues[2].value.toString();
  }

  get totalHours(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get clientId(): string {
    return this._call.inputValues[4].value.toString();
  }

  get isUnassigned(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }
}

export class AddJobCall__Outputs {
  _call: AddJobCall;

  constructor(call: AddJobCall) {
    this._call = call;
  }
}
