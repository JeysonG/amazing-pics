import {
  AppStoreApp,
  BottomBar,
  DesktopSocialList,
  Facebook,
  Content,
  GetTheApp,
  GetTheAppTitle,
  GoogleApp,
  HR,
  Instagram,
  Menu,
  MenuHead,
  MenuLink,
  MobileSocialList,
  Policy,
  PolicyRow,
  TopBar,
  Twitter,
  menu,
} from './FooterElelemts';

const SocialList = () => (
  <>
    <Twitter />
    <Facebook />
    <Instagram />
  </>
);

const Footer = () => {
  return (
    <Content>
      <TopBar>
        <GetTheApp>
          <GetTheAppTitle> Get The App</GetTheAppTitle>
          <AppStoreApp />
          <GoogleApp />
        </GetTheApp>
        <DesktopSocialList>
          <SocialList />
        </DesktopSocialList>
      </TopBar>
      <HR />
      <BottomBar>
        {menu.map(({ name, links }, menuIndex) => (
          <Menu key={`footer_menu_${menuIndex}`}>
            <MenuHead>{name}</MenuHead>
            {links.map(({ title, url }, linkIndex) => (
              <MenuLink href={url} key={`footer_link_${linkIndex}`}>
                {title}
              </MenuLink>
            ))}
          </Menu>
        ))}
        <MobileSocialList>
          <SocialList />
        </MobileSocialList>
        <Policy>
          <PolicyRow>© 2019 Openfit, LLC. All rights reserved.</PolicyRow>
          <PolicyRow>
            +Results vary depending on starting point and effort. Exercise and
            proper diet are necessary to achieve and maintain weight loss and
            muscle definition. The testimonials featured may have used more than
            one product or extended the program to achieve their maximum
            results.
          </PolicyRow>
          <PolicyRow>
            Consult your physician and follow all safety instructions before
            beginning any exercise program or using any supplement or meal
            replacement product, especially if you have any unique medical
            conditions or needs. The contents on our website are for
            informational purposes only, and are not intended to diagnose any
            medical condition, replace the advice of a healthcare professional,
            or provide any medical advice, diagnosis, or treatment.
          </PolicyRow>
          <PolicyRow>
            As an Amazon Associate, we may earn from qualifying purchases.
          </PolicyRow>
        </Policy>
      </BottomBar>
    </Content>
  );
};

export default Footer;
