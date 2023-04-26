import tw from 'twin.macro';

export const Container = tw.div`

 flex justify-between items-center py-5 text-sm

[> h4]:(font-medium)
[ > .right-nav ]:(flex items-center space-x-4 pr-6 )
[.profile]:(inline-block h-9 w-9 rounded-full cursor-pointer)

`;

export const IconContainer = tw.div`
    relative
    [> .icon]:(h-8 w-8 text-black)
    [> span]:(top-0 left-4 absolute  w-2.5 h-2.5 bg-red-500 border-2 border-white  rounded-full)
`;

export const BioContainer = tw.div`
    relative
    [.text-md]:(font-medium)
    [.text-xs]:(text-xs text-[#9B9B9B])
`;
