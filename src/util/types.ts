export type SafeZoneDetails = {
  patientId: string
  safeZoneId?: string
  lat?: string
  long?: string
  radius?: number
  image?: string
  frequencies?: string[]
  details?: string[]
}

export type PatientLocationDetails = {
  patientId: string
  registrationToken?: string
  lat?: string
  long?: string
}

export type CareTakerDetails = {
  patientId: string
  name?: string
  relationship?: string
  contact?: string
  image?: string
}

export type PatientDetails = {
  id: string
  name?: string
  age?: number
  address?: string
  image?: string
  languages?: string[]
  hobbies?: string[]
  postalCode?: string
  caretakerId?: string
  location?: PatientLocationDetails[]
  safeZone?: SafeZoneDetails[]
}