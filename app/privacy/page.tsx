import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Redline handles your information: newsletter emails, push notifications, advertising cookies and analytics.",
  alternates: { canonical: "/privacy" },
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "What this policy covers",
    body: [
      "This policy explains what information Redline collects when you visit this website, subscribe to our newsletter, or turn on notifications — and what we do with it. By using the site you agree to the practices described here.",
    ],
  },
  {
    heading: "Information you give us",
    body: [
      "Newsletter: if you subscribe to The Redline Morning Brief, we store the email address you provide and use it only to send you the newsletter. You can unsubscribe at any time using the link in any newsletter email, and we will stop sending to that address.",
      "Contact: if you email us, we keep your message and email address so we can reply and keep a record of the conversation.",
    ],
  },
  {
    heading: "Push notifications",
    body: [
      "If you allow notifications in your browser, our notification provider (OneSignal) stores a device identifier so we can deliver story alerts to your device. You can turn notifications off at any time in your browser settings, and no further alerts will be sent to that device.",
    ],
  },
  {
    heading: "Advertising and cookies",
    body: [
      "Redline shows advertising provided by Adsterra. Adsterra and its advertising partners may use cookies and similar technologies to show ads, limit how often you see the same ad, and measure ad performance. These cookies may collect information such as your IP address, browser type and pages visited.",
      "You can block or delete cookies in your browser settings. Blocking cookies may affect how some parts of the site and its ads work, but our stories will remain readable.",
    ],
  },
  {
    heading: "Analytics",
    body: [
      "We use Google Analytics to understand which stories readers enjoy and how they find the site. Google Analytics collects information such as pages visited, time on page and approximate location, in aggregate form. We use these statistics only to improve Redline.",
    ],
  },
  {
    heading: "What we do not do",
    body: [
      "We do not sell your personal information. We do not share your email address with advertisers. Information is shared only with the service providers named above (newsletter delivery, OneSignal, Adsterra and Google Analytics) so they can provide their services to us, or when the law requires it.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can unsubscribe from the newsletter at any time, turn off push notifications in your browser, and block cookies in your browser settings. If you would like us to delete information you have given us — for example your newsletter email address — contact us and we will remove it.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "If we change how we handle your information, we will update this page and change the date below. Significant changes will be noted on this page before they take effect.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="font-display text-sm font-bold uppercase tracking-widest text-brand">
        Privacy
      </p>
      <h1 className="mt-3 font-display text-4xl font-black uppercase leading-tight text-ink">
        Privacy Policy
      </h1>
      <span aria-hidden="true" className="mt-4 block h-1 w-16 bg-brand" />
      <p className="mt-4 text-sm text-neutral-500">
        Last updated: 22 November 2026
      </p>

      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4 text-base leading-relaxed text-neutral-700">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-12 text-base leading-relaxed text-neutral-700">
        Questions about this policy? Email us at{" "}
        <a
          href="mailto:subscribe@redlinepk.com"
          className="font-semibold text-brand hover:underline"
        >
          subscribe@redlinepk.com
        </a>
        .
      </p>
    </div>
  );
}
