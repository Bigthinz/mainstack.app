import tw, { styled } from 'twin.macro';

export const Nav = styled.nav`
  ${tw`
 mt-3 mb-5  space-y-1  px-2

`}

  .title {
    ${tw`
    mb-3 px-2  text-sm font-medium text-gray-900

`}
  }
`;

// export const Group = styled.div.attrs({ className: 'group' })``
export const NavLink = styled.div`
  ${tw`
  // flex items-center space-y-1  text-white rounded-md px-2 py-2  text-sm text-[#f1f1f1d6] hover:bg-[#f1f1f1dc] hover:text-gray-900

`}

  .link-true {
    ${tw`
        // bg-gray-100 text-gray-900 text-gray-900 bg-gray-100

`}
  }

  .link-false {
    ${tw`
    // text-white text-gray-900 bg-white

`}
  }

  .icon {
    ${tw`
    mr-3 flex-shrink-0 h-5 w-5

`}
  }

  .icon-true {
    ${tw`
    text-[#FC7B2C]

`}
  }

  .icon-false {
    ${tw`
    text-white hover:text-gray-500
`}
  }
`;
