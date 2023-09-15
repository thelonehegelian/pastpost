import Ajv from 'ajv';
// Define your type interface
const createNFTTransactionSchema = {
  type: 'object',
  properties: {
    nftTitle: { type: 'string' },
    message: { type: 'string' },
    owner: { type: 'string' },
    receiverAddress: { type: 'string' },
    unlockDate: { type: 'string' },
    senderName: { type: 'string' }, // This property is optional
    senderAddress: { type: 'string' }, // This property is optional
  },
  required: ['nftTitle', 'message', 'owner', 'receiverAddress', 'unlockDate'],
};

// Create an Ajv instance
const ajv = new Ajv();

// Compile the schema
export const createNFTTransactionValidate = ajv.compile(createNFTTransactionSchema);
