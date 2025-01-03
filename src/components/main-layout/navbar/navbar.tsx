import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "../../icons";
import MaxWidthWrapper from "../../max-width-wrapper";
import Cart from "./cart";
import NavbarItems from "./navbar-items";

const Navbar = () => {
  const user = true;
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile nav */}

              <div className="ml-4 flex lg:ml-0">
                <Link href={"/"}>
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavbarItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {/* Not Auth */}
                  {!user && (
                    <>
                      <Link
                        href={"/sign-in"}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        Sign in
                      </Link>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                      <Link
                        href={"/sign-up"}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        Create account
                      </Link>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </>
                  )}
                  {/* Is Auth */}
                  {user && (
                    <>
                      <Link
                        href={"/sign-in"}
                        className={buttonVariants({ variant: "ghost" })}
                      >
                        My account
                      </Link>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </>
                  )}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
