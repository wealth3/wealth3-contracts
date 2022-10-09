import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  newDeposit,
  newProofOfLife,
  newVault
} from "../generated/Wealth3/Wealth3"

export function createnewDepositEvent(
  userId: Address,
  amount: BigInt
): newDeposit {
  let newDepositEvent = changetype<newDeposit>(newMockEvent())

  newDepositEvent.parameters = new Array()

  newDepositEvent.parameters.push(
    new ethereum.EventParam("userId", ethereum.Value.fromAddress(userId))
  )
  newDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return newDepositEvent
}

export function createnewProofOfLifeEvent(
  userId: Address,
  _newProofOfLife: BigInt
): newProofOfLife {
  let newProofOfLifeEvent = changetype<newProofOfLife>(newMockEvent())

  newProofOfLifeEvent.parameters = new Array()

  newProofOfLifeEvent.parameters.push(
    new ethereum.EventParam("userId", ethereum.Value.fromAddress(userId))
  )
  newProofOfLifeEvent.parameters.push(
    new ethereum.EventParam(
      "_newProofOfLife",
      ethereum.Value.fromUnsignedBigInt(_newProofOfLife)
    )
  )

  return newProofOfLifeEvent
}

export function createnewVaultEvent(vault: ethereum.Tuple): newVault {
  let newVaultEvent = changetype<newVault>(newMockEvent())

  newVaultEvent.parameters = new Array()

  newVaultEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromTuple(vault))
  )

  return newVaultEvent
}
