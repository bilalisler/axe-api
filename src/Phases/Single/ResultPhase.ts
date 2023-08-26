import { LogService } from "../../Services";
import { IRequestPack } from "../../Interfaces";
import { Knex } from "knex";

export default async (context: IRequestPack) => {
  const { database, isTransactionOpen, item, res } = context;

  // If there is a valid transaction, we should commit it
  if (isTransactionOpen) {
    LogService.warn("\tDB transaction commit");
    (database as Knex.Transaction).commit();
  }

  res.json(item);
};
