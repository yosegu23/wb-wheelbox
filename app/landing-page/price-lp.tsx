import { CheckIcon } from "lucide-react";
import Link from "next/link";

export default function PriceLandingPage() {
  return (
    <section className="py-24 lg:pb-32  overflow-hidden text-neutral-800 dark:text-neutral-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="mb-4 text-6xl tracking-tighter">
            Pricing &amp; Plans
          </h2>
          <p className="text-xl tracking-tight">
            Find Your Perfect Fit - Effortless Websites, Transparent Pricing.
          </p>
        </div>
        <div className="flex flex-wrap -m-6 *:mx-auto">
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="h-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-2xl transform-gpu hover:-translate-y-2 transition duration-500 ">
              <div className="p-12 border-b border-neutral-300 dark:border-neutral-600">
                <div className="pr-9">
                  <h4 className="mb-6 text-6xl tracking-tighter">Solo</h4>
                  <p className="mb-2 text-xl font-semibold tracking-tight">
                    3,000,000 IDR / $184,25
                  </p>
                  <p className="tracking-tight">
                    The ideal plan for new businesses who require basic usage.
                  </p>
                </div>
              </div>
              <div className="p-12 pb-11">
                <ul className="-m-1.5 mb-11">
                  <FeatureItem>Free Hosting 1 Year</FeatureItem>
                  <FeatureItem>Free Domain</FeatureItem>
                  <FeatureItem>UI/UX Design 1 Page</FeatureItem>
                  <FeatureItem>Responsive Design</FeatureItem>
                </ul>

                <PricingButton noCardRequired={true}>
                  <Link
                    target="_blank"
                    href="https://wa.me/62895335181400?text=I'm%20interested%20in%20landing-page%20service%20for%20package%20of%20solo
">
                    Choose Plan
                  </Link>
                </PricingButton>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div
              className="p-px overflow-hidden rounded-2xl hover:-translate-y-2 transition duration-500 transform-gpu"
              style={{
                backgroundImage:
                  "url('/background-image/advanced-gradient.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}>
              <div className="h-full bg-white dark:bg-neutral-900 rounded-2xl">
                <div
                  className="p-12"
                  style={{
                    backgroundImage:
                      "url('/background-image/advanced-gradient.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}>
                  <div className="pr-9">
                    <h4 className="mb-6 text-6xl text-white tracking-tighter">
                      Startup
                    </h4>
                    <p className="mb-2 text-xl text-white font-semibold tracking-tighter">
                      5,000,000 IDR / $307,08
                    </p>
                    <p className="text-white tracking-tight">
                      The ideal plan for larger businesses who require heavy
                      usage.
                    </p>
                  </div>
                </div>
                <div className="p-12 pb-11">
                  <ul className="-m-1.5 mb-11">
                    <FeatureItem>Free Hosting 1 Year</FeatureItem>
                    <FeatureItem>Free Domain 1 Year</FeatureItem>
                    <FeatureItem>UI/UX Design Pages++</FeatureItem>
                    <FeatureItem>Responsive Design</FeatureItem>
                    <FeatureItem>Modern Animation Website</FeatureItem>
                    <FeatureItem>Intergrated With Email</FeatureItem>
                  </ul>
                  <PricingButton noCardRequired={true}>
                    <Link
                      target="_blank"
                      href="https://wa.me/62895335181400?text=I'm%20interested%20in%20landing-page%20service%20for%20package%20of%20startup
">
                      Choose Plan
                    </Link>
                  </PricingButton>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-6">
            <div className="flex flex-col justify-between h-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-2xl transform-gpu hover:-translate-y-2 transition duration-500">
              <div className="p-12 border-neutral-300 dark:border-neutral-600">
                <div className="pr-9">
                  <h4 className="mb-6 text-6xl tracking-tighter">Custom</h4>
                  <p className="mb-2 text-xl font-semibold tracking-tighter">
                    Customize price
                  </p>
                  <p className="tracking-tight">
                    We can customize a plan that suits the exact needs of your
                    business.
                  </p>
                </div>
              </div>
              <div className="p-12 pb-11">
                <PricingButton>
                  <Link
                    target="_blank"
                    href="https://wa.me/62895335181400?text=I'm%20interested%20in%20landing-page%20service%20for%20package%20of%cutomize
">
                    Contact sales
                  </Link>
                </PricingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureItem = ({ children }: { children: string }) => {
  return (
    <li className="flex items-center py-1.5">
      <CheckIcon className="size-3 mr-3" />
      <span className="font-medium tracking-tight">{children}</span>
    </li>
  );
};

const PricingButton = ({
  children,
  href,

  noCardRequired,
}: {
  children: React.ReactNode;
  href?: string;
  noCardRequired?: boolean;
}) => {
  return (
    <>
      <a
        className="inline-block px-5 py-4 w-full text-center  font-semibold tracking-tight bg-transparent hover:bg-neutral-900 hover:text-white border dark:hover:bg-white dark:hover:text-neutral-800 hover:scale-105 border-neutral-700 rounded-lg transition duration-200"
        href={href ?? ""}>
        {children}
      </a>
      {noCardRequired && (
        <span className="text-sm text-neutral-600 tracking-tight">
          No credit card required
        </span>
      )}
    </>
  );
};
