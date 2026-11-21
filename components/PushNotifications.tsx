"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

/**
 * OneSignal Web Push (SDK v16).
 *
 * Enabled only when NEXT_PUBLIC_ONESIGNAL_APP_ID is set. Without it the
 * component renders nothing and loads no scripts, so the site works
 * exactly as before. The service worker lives at
 * /OneSignalSDKWorker.js (public/OneSignalSDKWorker.js).
 */

interface OneSignalInitOptions {
  appId: string;
  notifyButton?: {
    enable: boolean;
  };
  promptOptions?: {
    slidedown?: {
      prompts?: Array<{
        type: "push" | "category" | "sms" | "email" | "smsAndEmail";
        autoPrompt?: boolean;
        text?: {
          actionMessage?: string;
          acceptButton?: string;
          cancelButton?: string;
        };
        delay?: {
          pageViews?: number;
          timeDelay?: number;
        };
      }>;
    };
  };
  welcomeNotification?: {
    disable?: boolean;
    title?: string;
    message?: string;
  };
}

interface OneSignalSdk {
  init: (options: OneSignalInitOptions) => Promise<void>;
}

type OneSignalDeferredCallback = (
  OneSignal: OneSignalSdk
) => void | Promise<void>;

declare global {
  interface Window {
    OneSignalDeferred?: OneSignalDeferredCallback[];
  }
}

export default function PushNotifications() {
  const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;
  const queuedRef = useRef(false);

  useEffect(() => {
    if (!appId || queuedRef.current) return;
    queuedRef.current = true;

    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async (OneSignal) => {
      await OneSignal.init({
        appId,
        notifyButton: { enable: true },
        promptOptions: {
          slidedown: {
            prompts: [
              {
                type: "push",
                autoPrompt: true,
                text: {
                  actionMessage:
                    "Get Redline's top stories and breaking news delivered to your device.",
                  acceptButton: "Subscribe",
                  cancelButton: "No thanks",
                },
                delay: {
                  pageViews: 1,
                  timeDelay: 5,
                },
              },
            ],
          },
        },
        welcomeNotification: {
          disable: false,
          title: "Welcome to Redline",
          message:
            "You're in — top stories and breaking news, straight to you.",
        },
      });
    });
  }, [appId]);

  if (!appId) return null;

  return (
    <Script
      src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
      strategy="afterInteractive"
    />
  );
}
