import { JobAdded as JobAddedEvent } from "../generated/Jobs/Jobs"
import { JobAdded } from "../generated/schema"

export function handleJobAdded(event: JobAddedEvent): void {
  let entity = new JobAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.Jobs_id = event.params.id
  entity.originalId = event.params.originalId
  entity.operatingUnit = event.params.operatingUnit
  entity.officePostalCode = event.params.officePostalCode
  entity.totalHours = event.params.totalHours
  entity.clientId = event.params.clientId
  entity.isUnassigned = event.params.isUnassigned

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
