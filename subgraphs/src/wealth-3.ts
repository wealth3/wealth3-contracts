import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Wealth3,
  newDeposit,
  newProofOfLife,
  newVault
} from "../generated/Wealth3/Wealth3"
import { Vault } from "../generated/schema"

export function handlenewDeposit(event: newDeposit): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = Vault.load(event.transaction.from)
  if(entity !== null){
  entity.amount = entity.amount.plus(event.params.amount);
  entity.save()
}




  // Entities can be written to the store with `.save()`


  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.Vaults(...)
  // - contract.getVault(...)
}

export function handlenewProofOfLife(event: newProofOfLife): void {
  let entity = Vault.load(event.params.userId);
  if(entity){
    entity.lastProofOfLife = event.params._newProofOfLife;
    entity.save();
  }
}

export function handlenewVault(event: newVault): void {
  let entity = Vault.load(event.transaction.from);
  if(!entity){
    let vault = new Vault(event.transaction.from);
    vault.contractTime = event.params.vault.contractTime;
    vault.proofOfLifeFreq = event.params.vault.proofOfLifeFreq;
    vault.amount = event.params.vault.amount;
    vault.lastProofOfLife = event.params.vault.lastProofOfLife;
    vault.beneficiaries = event.params.vault.beneficiaries.map<Bytes>((e: Bytes) => e);
    vault.distribution = event.params.vault.distribution;
    vault.save();
  }
}
