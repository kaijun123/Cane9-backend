import { NextFunction, Request, Response } from "express"
import { PatientLocationDetails } from "src/util/types"
import { prisma } from ".."

export const updateLocation = async (req: Request, res: Response, next: NextFunction) => {
  const { patientId, lat, long }: PatientLocationDetails = req.body

  try {
    if (!lat || !long) {
      throw new Error("No lat or long provided")
    }

    const safeZones = await prisma.safeZone.findMany({
      where: { patientId }
    })

    let outOfSafeZone = safeZones.length > 0 ? true : false
    for (var s of safeZones) {
      var distance = calcDistance(s.lat, s.long, lat, long)
      if (distance < s.radius) {
        outOfSafeZone = false;
        break;
      }
    }
    console.log("outOfSafeZone", outOfSafeZone)

    // TODO: Incorporate firebase cloud functions to create push notifs to the FE. Maybe create a constant monitoring system if apis are not suitable

    const location = await prisma.location.update({
      where: { patientId },
      data: { lat, long, outOfSafeZone }
    })

    console.log(location)

    // Send back the status of alarm to arduino on next location update
    const location2 = await prisma.location.findUnique({
      where: { patientId }
    })
    if (location2!.alarm) {
      res.status(400).send("1") // Enable alarm
    }
    else {
      res.status(400).send("0") // Disable alarm
    }

    // res.status(200).send(location)
  }
  catch (error: any) {
    res.status(400).send(error.message)
  }
}

// https://www.geeksforgeeks.org/program-distance-two-points-earth/
// Returns distance in m
const calcDistance = (lat1String: string, lon1String: string, lat2String: string, lon2String: string) => {

  // The math module contains a function
  // named toRadians which converts from
  // degrees to radians.
  var lat1 = parseFloat(lat1String)
  var lon1 = parseFloat(lon1String)
  var lat2 = parseFloat(lat2String)
  var lon2 = parseFloat(lon2String)

  lon1 = lon1 * Math.PI / 180;
  lon2 = lon2 * Math.PI / 180;
  lat1 = lat1 * Math.PI / 180;
  lat2 = lat2 * Math.PI / 180;

  // Haversine formula
  let dlon = lon2 - lon1;
  let dlat = lat2 - lat1;
  let a = Math.pow(Math.sin(dlat / 2), 2)
    + Math.cos(lat1) * Math.cos(lat2)
    * Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers. Use 3956
  // for miles
  let r = 6371;

  // calculate the result
  return (c * r * 1000);
}