import * as SQlite from "expo-sqlite";
import { SQLError, SQLResultSet } from "expo-sqlite";

const db = SQlite.openDatabase("places.db");

export const init = (): Promise<SQLResultSet> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS places (id INTEGER NOT NULL PRIMARY KEY, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
};

export const insertPlace = (
  title: string,
  image: string,
  address: string,
  lat: number,
  lng: number,
  id: number
): Promise<SQLResultSet> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (id, title, image, address, lat, lng) VALUES (?, ?, ?, ?, ?, ?)`,
        [id, title, image, address, lat, lng],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
};

export const fetchPlaces = (): Promise<SQLResultSet> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
          return false;
        }
      );
    });
  });
};

export const test = () => {
  let response;
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM places`,
      [],
      (_, result) => {
        response = result;
      },
      (_, err) => {
        response = err;
        return false;
      }
    );
  });
  return response;
};
