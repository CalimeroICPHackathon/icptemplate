import bs58 from 'bs58';
import { getStorageClientKey } from './storage';
import { ClientKey } from './types';
import { WalletType } from '../api/admin/dataSource/NodeDataSource';

export interface Header {
  [key: string]: string;
}

export async function createAuthHeader(
  payload: string,
  networkId: string,
): Promise<Header | null> {
  const privateKey: String | null = await getPrivateKey();

  if (!privateKey) {
    return null;
  }

  const encoder = new TextEncoder();
  const contentBuff = encoder.encode(payload);

  const signingKey = bs58.encode(privateKey.public.bytes);

  const hashBuffer = await crypto.subtle.digest('SHA-256', contentBuff);
  const hashArray = new Uint8Array(hashBuffer);

  const signature = await privateKey.sign(hashArray);
  const signatureBase58 = bs58.encode(signature);
  const contentBase58 = bs58.encode(hashArray);
  const headers: Header = {
    wallet_type: JSON.stringify(WalletType.NEAR({ networkId: networkId })),
    signing_key: signingKey,
    signature: signatureBase58,
    challenge: contentBase58,
  };

  return headers;
}

export async function getPrivateKey(): Promise<String | null> {
  try {
    return await import.meta.env['VITE_CLIENT_PRIVATE'];
  } catch (error) {
    console.error('Error extracting private key:', error);
    return null;
  }
}
