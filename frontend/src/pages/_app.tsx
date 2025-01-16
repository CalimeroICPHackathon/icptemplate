import '../styles/tailwind.css';

import type { AppProps } from 'next/app';
import '@near-wallet-selector/modal-ui/styles.css';
import WithIdAuth from '../components/auth/auth';
import { AccessTokenWrapper } from '@calimero-is-near/calimero-p2p-sdk';
import { getNodeUrl } from '../utils/node';
import { Client, InternetIdentity } from '@bundly/ares-core';
import { IcpConnectContextProvider } from '@bundly/ares-react';

export default function App({ Component, pageProps }: AppProps) {
  const client = Client.create({
    restCanisters: {
      backend: {
        baseUrl: process.env['NEXT_PUBLIC_API_REST_URL']!,
      },
    },
    providers: [
      new InternetIdentity({
        providerUrl: process.env['NEXT_PUBLIC_INTERNET_IDENTITY_URL']!,
      }),
    ],
  });

  return (
    <IcpConnectContextProvider client={client}>
      <WithIdAuth>
        <AccessTokenWrapper getNodeUrl={getNodeUrl}>
          <Component {...pageProps} />
        </AccessTokenWrapper>
      </WithIdAuth>
    </IcpConnectContextProvider>
  );
}
