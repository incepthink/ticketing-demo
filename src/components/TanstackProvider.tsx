"use client";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { networkConfig } from "@/utils/networkConfig";
import { EnokiFlowProvider } from "@mysten/enoki/react";
import { AppWrapper } from "@/context/AppContext";

const queryClient = new QueryClient();

export const TanstackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <EnokiFlowProvider apiKey="enoki_private_7d937074507bda2b093d68458dfbf049">
          <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
            <WalletProvider autoConnect={true}>{children}</WalletProvider>
          </SuiClientProvider>
        </EnokiFlowProvider>
      </AppWrapper>
    </QueryClientProvider>
  );
};
