import {IconFacebook, IconInstagram, IconTwitter} from './Icon';

function FooterContact() {
  return (
    <div className="relative text-black">
      <h3 className="text-[#707A58] font-bold mb-3">Connect with us:</h3>
      <div className="flex items-center">
        <p>Telephone:</p>
        <p className="pl-1 font-bold">+63 999 715 0096</p>
      </div>
      <div className="flex items-center">
        <p>Address:</p>
        <p className="pl-1 font-bold">Bagumbong, Caloocan City, PH</p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <a href="facebook.com" target="_blank">
          <IconFacebook height={30} width={30} color="#707A58" />
        </a>
        <a href="instagram.com" target="_blank">
          <IconInstagram height={30} width={30} color="#707A58" />
        </a>
        <a href="twiter.com" target="_blank">
          <IconTwitter height={30} width={30} color="#707A58" />
        </a>
      </div>
    </div>
  );
}

export default FooterContact;
