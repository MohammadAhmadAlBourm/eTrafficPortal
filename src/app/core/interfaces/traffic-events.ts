import { Traffic } from "./traffic"

export interface TrafficEvents {
  id: number
  sessionID: string
  time: string
  number: number
  category: string
  laneId: number
  other: string
  value: number
  direction: number
  traffic: Traffic
}
