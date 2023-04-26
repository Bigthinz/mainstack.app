import tw, { styled } from 'twin.macro';

export const Container = styled.div`
  ${tw`
 flex min-h-[100vh] lg:fixed  w-[250px] flex-col bg-[#2C2C2C]

`}
`;

export const NavMain = styled.div`
  ${tw`
 flex flex-1 flex-col overflow-y-auto pt-5 pb-4 

`}
`;

export const NavHeader = styled.div`
  ${tw`
flex flex-shrink-0  px-4

`}
`;

export const NavFooter = styled.div`
  ${tw`
flex flex-shrink-0  mb-3

`}
`;

export const HeadLink = styled.a`
  ${tw`
block w-full flex-shrink-0 pb-4

`}

  .head-wrap {
    ${tw`
    flex items-center
`}
  }
  .text-wrapper {
    ${tw`
    ml-3
`}
  }
`;

export const TextWrapper = styled.div`
  ${tw`
 ml-3
`}
  .text-xs {
    ${tw`
        text-xs font-medium text-white
    `}
  }

  .text-sm {
    ${tw`
         text-sm  font-medium text-white
         `}
  }
`;
