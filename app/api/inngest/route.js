import { serve } from "inngest/next";

import {
  inngest,
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdating,
} from "@/config/inngest";
import { syncIndexes } from "mongoose";
import { syncKind } from "inngest/helpers/consts";
import { Syncopate } from "next/font/google";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdating,
    //createUserOrder,

    /* your functions will be passed here later! */
  ],
});
