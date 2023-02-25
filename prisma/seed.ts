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
            location: "Home",
            address: "623 Jurong West Street 61, Block 623, #06-619",
            lat: "1.3542656090789686",
            long: "103.6880687680899",
            radius: 1000,
            image: "Safezone/Safezone_1.png",
            frequencies: ["Visits every Tues and Thurs"],
            details: [""]
          }, // Tanjong Hall
          {
            location: "Pioneer Shopping Mall",
            address: "638 Jurong West Street 61",
            postalCode: "640638",
            lat: "1.3473120629448945",
            long: "103.68086265096642",
            radius: 1000,
            image: "Safezone/Safezone_1.png",
            frequencies: ["Visits every Wed"],
            details: [""]
          }, // North Spine
          {
            location: "Pier Medical Centre",
            address: "725 Jurong West Ave 5",
            postalCode: "640725",
            lat: "1.350052767900789",
            long: "103.68387232450321",
            radius: 1000,
            image: "Safezone/Safezone_1.png",
            frequencies: ["Visits every Fri"],
            details: [""]
          }  // NTU ADM
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
