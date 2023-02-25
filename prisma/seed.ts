import { PrismaClient } from '@prisma/client'

const patientId = 'iZJE99WIH4VQGzWptmDxpV3skpv1'

const prisma = new PrismaClient()
  ;
(async () => {
  const seed = await prisma.patient.create({
    data: {
      id: `${patientId}`,
      name: 'Winston Huang',
      age: 75,
      address: 'Nassim Road',
      postalCode: '123456',
      image: 'Patient/Patient_1.png',
      languages: [
        'English',
        'Chinese'
      ],
      hobbies: [
        'sleeping',
        'dancing'
      ],
      location: {
        create: { lat: "1.3399266393719902", long: "103.70669751101173" } // Jurong Point
      },
      safeZone: {
        create: [
          {
            lat: "1.3542656090789686", long: "103.6880687680899", radius: 1000, image: "safeZone/safeZone_1.png"
          }, // Tanjong Hall
          { lat: "1.3473120629448945", long: "103.68086265096642", radius: 1000, image: null }, // North Spine
          { lat: "1.350052767900789", long: "103.68387232450321", radius: 1000, image: null }  // NTU ADM
        ]
      },
      caretaker: {
        create: {
          name: 'Ivan Loke',
          relationship: 'Son',
          contact: '81234567',
          image: 'Caregiver/Caregiver_1.png'
        }
      }
    },
  })

  // const caretaker = await prisma.patient.findUnique({
  //   where: { id: seed.caretakerId! }
  // })
  // console.log('caretaker', caretaker)

  const patient = await prisma.patient.findUnique({
    where: { id: patientId }
  })
  console.log('patient', patient)

  const location = await prisma.location.findUnique({
    where: { patientId }
  })
  console.log('location', location)

  const safeZone = await prisma.safeZone.findMany({
    where: {
      patientId: patientId
    }
  })
  console.log('safeZone', safeZone)

  await prisma.$disconnect()

})().catch(console.error).finally(() => process.exit(0))
