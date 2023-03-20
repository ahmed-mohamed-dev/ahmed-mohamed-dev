import React from 'react'
import AvatarImage from 'src/assets/avatar-transparent.png';
import { GithubIcon, GmailIcon } from '../Icons';

export default function index() {
  return (
    <header>
      <div className='logo' id='color-click'>
        <img width={55} alt="avatar" height={55} src={AvatarImage} />
      </div>
      <div>
        <ul className='flex items-center space-x-[30px]'>
          <li id='gmail' className='cursor-pointer'>
            <a ariaLabel="email" dataInlinesvg=".inlineSvgFile-3" href="mailto:info@mathewzeng1@gmail.com?subject=Mail to mathewzeng.netlify.com">
              <GmailIcon size={25} className="text-[#777] fill-[#777] hover:scale-110" />
            </a>
          </li>
          <li id='github' className='cursor-pointer'>
            <a ariaLabel="email" dataInlinesvg=".inlineSvgFile-3" href="https://github.com/ahmed-mohamed-dev">
              <GithubIcon size={22} className="text-[#777] fill-[#777] hover:scale-110" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
