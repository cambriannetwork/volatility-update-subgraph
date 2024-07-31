import {
    FeeUpdate as FeeUpdateEvent
  } from "../generated/OracleBasedFeeHook/OracleBasedFeeHook"
  import { FeeUpdated } from "../generated/schema"
  
  
  export function handleVolatilityUpdated(event: FeeUpdateEvent): void {
    let entity = new FeeUpdated(
      event.transaction.hash.concatI32(event.logIndex.toI32())  )
  
    entity.fee = event.params.newFee
    entity.blockTimestamp = event.params.timestamp
  
    entity.save()
  }
  