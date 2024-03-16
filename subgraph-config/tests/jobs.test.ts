import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { JobAdded } from "../generated/schema"
import { JobAdded as JobAddedEvent } from "../generated/Jobs/Jobs"
import { handleJobAdded } from "../src/jobs"
import { createJobAddedEvent } from "./jobs-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let originalId = "Example string value"
    let operatingUnit = "Example string value"
    let officePostalCode = "Example string value"
    let totalHours = BigInt.fromI32(234)
    let clientId = "Example string value"
    let isUnassigned = "boolean Not implemented"
    let newJobAddedEvent = createJobAddedEvent(
      id,
      originalId,
      operatingUnit,
      officePostalCode,
      totalHours,
      clientId,
      isUnassigned
    )
    handleJobAdded(newJobAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("JobAdded created and stored", () => {
    assert.entityCount("JobAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "originalId",
      "Example string value"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "operatingUnit",
      "Example string value"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "officePostalCode",
      "Example string value"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalHours",
      "234"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "clientId",
      "Example string value"
    )
    assert.fieldEquals(
      "JobAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "isUnassigned",
      "boolean Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
