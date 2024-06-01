import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function FooterComp() {
  return (
    <Footer container>
      <div className='w-full'>
        <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
          <div className='flex justify-center items-center'>
            <img
              src='https://jonmgomes.com/wp-content/uploads/2020/05/Comp_1.gif'
              className='ml-3 mr-1 h-6 sm:h-9 rounded-sm'
              alt='Flowbite Logo'
            />
            <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
              Graph
            </span>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <FooterTitle title='about' />
              <FooterLinkGroup col>
                <FooterLink href='/'>Home</FooterLink>
                <Footer.Link
                  href='/dashboard'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Dashboard
                </Footer.Link>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title='Follow us' />
              <FooterLinkGroup col>
                <Footer.Link
                  href='https://www.github.com/Chandan8018'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <FooterLink href='#'>Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title='Legal' />
              <FooterLinkGroup col>
                <FooterLink href='#'>Privacy Policy</FooterLink>
                <FooterLink href='#'>Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            className='text-black dark:text-white'
            href='#'
            by="Chandan's Portfolio"
            year={new Date().getFullYear()}
          />
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <FooterIcon href='#' icon={BsFacebook} />
            <FooterIcon href='#' icon={BsInstagram} />
            <FooterIcon href='#' icon={BsTwitter} />
            <FooterIcon
              href='https://www.github.com/Chandan8018'
              target='_blank'
              rel='noopener noreferrer'
              icon={BsGithub}
            />
            <FooterIcon href='#' icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
