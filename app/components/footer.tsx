import { Button } from "@/components/ui/button";
import { StickyFooter } from "./sticky-footer";
import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full">
      <div className="h-[150dvh] w-full">
        <div className="bg-neutral-200 dark:bg-neutral-800  rounded-3xl h-full flex flex-col items-center justify-center">
          <p className="text-xl uppercase text-neutral-950 dark:text-neutral-200 font-medium">
            Some content
          </p>
        </div>
      </div>
      <StickyFooter
        heightValue="100dvh"
        className="text-neutral-900 dark:text-neutral-100">
        <Content />
      </StickyFooter>
    </div>
  );
}

export default Footer;

export function Content() {
  return (
    <div className="py-8 px-12 h-full w-full flex flex-col justify-between">
      <div className="grid sm:grid-cols-2 grid-cols-1 shrink-0 gap-20 py-14">
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-neutral-500">About</h3>
          <Button variant="link" className="w-14" asChild>
            <Link href="/app/Teams">Teams</Link>
          </Button>
          <Button variant="link" className="w-14" asChild>
            <Link href="/app/corevalues">Core Values</Link>
          </Button>
          <Button variant="link" className="w-14" asChild>
            <Link href="/app/wheelboxstory">Wheelbox Story</Link>
          </Button>
          <Button variant="link" className="w-14" asChild>
            <Link href="/app/wheelboxstory">Contact Us</Link>
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="mb-2 uppercase text-neutral-500">Services</h3>
          <Button variant="link" className="w-14" asChild>
            <Link href="/app/landing-page">Modern Landing Page</Link>
          </Button>
          <Button variant="link" className="w-14" asChild>
            <Link href="/app/custom-app">Web App & Mobile App Custom</Link>
          </Button>
          <Button variant="link" className="w-14" asChild>
            <Link href="/app/smm">Social Media Management</Link>
          </Button>
          <Button variant="link" className="w-14" asChild>
            <Link href="/app/creative-brands">Creative Brands</Link>
          </Button>
        </div>
      </div>

      <div className="flex justify-between flex-col gap-4 sm:flex-row items-end">
        <h1 className="text-[14vw] leading-[0.8] mt-10">Wheelbox</h1>
        <p>© 2025 All Right Reserved</p>
      </div>
    </div>
  );
}
