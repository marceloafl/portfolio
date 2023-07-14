"use client";
import Image from "next/image";
import * as S from "./styles";
import { openSans } from '../../theme/styles/font';

export default function ContactList() {
  return (
    <div>
      <S.ul>
        <li>
          <a href="https://github.com/marceloafl" target="_blank">
            <Image
              alt="Github"
              src={"/images/github-mark.svg"}
              height={24}
              width={24}
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/marceloafl/" target="_blank">
            <Image
              alt="Github"
              src={"/images/linkedin-mark.svg"}
              height={24}
              width={24}
            />
          </a>
        </li>
      </S.ul>
    </div>
  );
}
