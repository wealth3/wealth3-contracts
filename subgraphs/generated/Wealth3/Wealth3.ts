// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class newDeposit extends ethereum.Event {
  get params(): newDeposit__Params {
    return new newDeposit__Params(this);
  }
}

export class newDeposit__Params {
  _event: newDeposit;

  constructor(event: newDeposit) {
    this._event = event;
  }

  get userId(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class newProofOfLife extends ethereum.Event {
  get params(): newProofOfLife__Params {
    return new newProofOfLife__Params(this);
  }
}

export class newProofOfLife__Params {
  _event: newProofOfLife;

  constructor(event: newProofOfLife) {
    this._event = event;
  }

  get userId(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newProofOfLife(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class newVault extends ethereum.Event {
  get params(): newVault__Params {
    return new newVault__Params(this);
  }
}

export class newVault__Params {
  _event: newVault;

  constructor(event: newVault) {
    this._event = event;
  }

  get vault(): newVaultVaultStruct {
    return changetype<newVaultVaultStruct>(
      this._event.parameters[0].value.toTuple()
    );
  }
}

export class newVaultVaultStruct extends ethereum.Tuple {
  get contractTime(): BigInt {
    return this[0].toBigInt();
  }

  get proofOfLifeFreq(): BigInt {
    return this[1].toBigInt();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }

  get lastProofOfLife(): BigInt {
    return this[3].toBigInt();
  }

  get beneficiaries(): Array<Address> {
    return this[4].toAddressArray();
  }

  get distribution(): Array<BigInt> {
    return this[5].toBigIntArray();
  }
}

export class Wealth3__VaultsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getContractTime(): BigInt {
    return this.value0;
  }

  getProofOfLifeFreq(): BigInt {
    return this.value1;
  }

  getAmount(): BigInt {
    return this.value2;
  }

  getLastProofOfLife(): BigInt {
    return this.value3;
  }
}

export class Wealth3__getVaultResultValue0Struct extends ethereum.Tuple {
  get contractTime(): BigInt {
    return this[0].toBigInt();
  }

  get proofOfLifeFreq(): BigInt {
    return this[1].toBigInt();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }

  get lastProofOfLife(): BigInt {
    return this[3].toBigInt();
  }

  get beneficiaries(): Array<Address> {
    return this[4].toAddressArray();
  }

  get distribution(): Array<BigInt> {
    return this[5].toBigIntArray();
  }
}

export class Wealth3 extends ethereum.SmartContract {
  static bind(address: Address): Wealth3 {
    return new Wealth3("Wealth3", address);
  }

  Vaults(param0: Address): Wealth3__VaultsResult {
    let result = super.call(
      "Vaults",
      "Vaults(address):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Wealth3__VaultsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_Vaults(param0: Address): ethereum.CallResult<Wealth3__VaultsResult> {
    let result = super.tryCall(
      "Vaults",
      "Vaults(address):(uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Wealth3__VaultsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  getVault(_userId: Address): Wealth3__getVaultResultValue0Struct {
    let result = super.call(
      "getVault",
      "getVault(address):((uint256,uint256,uint256,uint256,address[],uint256[]))",
      [ethereum.Value.fromAddress(_userId)]
    );

    return changetype<Wealth3__getVaultResultValue0Struct>(result[0].toTuple());
  }

  try_getVault(
    _userId: Address
  ): ethereum.CallResult<Wealth3__getVaultResultValue0Struct> {
    let result = super.tryCall(
      "getVault",
      "getVault(address):((uint256,uint256,uint256,uint256,address[],uint256[]))",
      [ethereum.Value.fromAddress(_userId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Wealth3__getVaultResultValue0Struct>(value[0].toTuple())
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateVaultCall extends ethereum.Call {
  get inputs(): CreateVaultCall__Inputs {
    return new CreateVaultCall__Inputs(this);
  }

  get outputs(): CreateVaultCall__Outputs {
    return new CreateVaultCall__Outputs(this);
  }
}

export class CreateVaultCall__Inputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get _contractTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _proofOfLifeFreq(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _beneficiaries(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _distributions(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class CreateVaultCall__Outputs {
  _call: CreateVaultCall;

  constructor(call: CreateVaultCall) {
    this._call = call;
  }

  get value0(): CreateVaultCallValue0Struct {
    return changetype<CreateVaultCallValue0Struct>(
      this._call.outputValues[0].value.toTuple()
    );
  }
}

export class CreateVaultCallValue0Struct extends ethereum.Tuple {
  get contractTime(): BigInt {
    return this[0].toBigInt();
  }

  get proofOfLifeFreq(): BigInt {
    return this[1].toBigInt();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }

  get lastProofOfLife(): BigInt {
    return this[3].toBigInt();
  }

  get beneficiaries(): Array<Address> {
    return this[4].toAddressArray();
  }

  get distribution(): Array<BigInt> {
    return this[5].toBigIntArray();
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get value0(): DepositCallValue0Struct {
    return changetype<DepositCallValue0Struct>(
      this._call.outputValues[0].value.toTuple()
    );
  }
}

export class DepositCallValue0Struct extends ethereum.Tuple {
  get contractTime(): BigInt {
    return this[0].toBigInt();
  }

  get proofOfLifeFreq(): BigInt {
    return this[1].toBigInt();
  }

  get amount(): BigInt {
    return this[2].toBigInt();
  }

  get lastProofOfLife(): BigInt {
    return this[3].toBigInt();
  }

  get beneficiaries(): Array<Address> {
    return this[4].toAddressArray();
  }

  get distribution(): Array<BigInt> {
    return this[5].toBigIntArray();
  }
}

export class UpdateProofOfLifeCall extends ethereum.Call {
  get inputs(): UpdateProofOfLifeCall__Inputs {
    return new UpdateProofOfLifeCall__Inputs(this);
  }

  get outputs(): UpdateProofOfLifeCall__Outputs {
    return new UpdateProofOfLifeCall__Outputs(this);
  }
}

export class UpdateProofOfLifeCall__Inputs {
  _call: UpdateProofOfLifeCall;

  constructor(call: UpdateProofOfLifeCall) {
    this._call = call;
  }
}

export class UpdateProofOfLifeCall__Outputs {
  _call: UpdateProofOfLifeCall;

  constructor(call: UpdateProofOfLifeCall) {
    this._call = call;
  }
}

export class WithdrawAllFundsAdminCall extends ethereum.Call {
  get inputs(): WithdrawAllFundsAdminCall__Inputs {
    return new WithdrawAllFundsAdminCall__Inputs(this);
  }

  get outputs(): WithdrawAllFundsAdminCall__Outputs {
    return new WithdrawAllFundsAdminCall__Outputs(this);
  }
}

export class WithdrawAllFundsAdminCall__Inputs {
  _call: WithdrawAllFundsAdminCall;

  constructor(call: WithdrawAllFundsAdminCall) {
    this._call = call;
  }
}

export class WithdrawAllFundsAdminCall__Outputs {
  _call: WithdrawAllFundsAdminCall;

  constructor(call: WithdrawAllFundsAdminCall) {
    this._call = call;
  }
}