import {
  OwnershipTransferred as OwnershipTransferredEvent,
  VolatilityUpdated as VolatilityUpdatedEvent
} from "../generated/SnarkBasedFeeOracle/SnarkBasedFeeOracle"
import { VolatilityUpdated } from "../generated/schema"


export function handleVolatilityUpdated(event: VolatilityUpdatedEvent): void {
  let entity = new VolatilityUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())

  )
  entity.newRv = event.params.newRv

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp

  entity.save()
}
