import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;
if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

//Incercam prima data sa vedem daca exista conexiune cu DB, daca nu este se incearca o noua conectare
//Din cauza next.js unde se conecteaza la DB la fiecare request(nu mentine conexiune, fiecare request este procesat independent)

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, { dbName: "dream", bufferCommands: false });

  cached.conn = await cached.promise;

  return cached.conn;
};
