import React from 'react'
import { Singleservice } from '../components/Service'

export const Services = () => {
  return (
    <div className='services'>
        <h1>Services</h1>
    <Singleservice 
    type="Basic Bath" 
    description="Full body brush and detangle, warm water shampoo, conditioner and blow dry.Includes nail Dremel, ear pluck and gland expression if indicated."
    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dogtipper.com%2Fwp-content%2Fuploads%2F2016%2F02%2FDepositphotos_38932601_dog-bath.jpg&f=1&nofb=1&ipt=a2eb4c999af5a42bd8abf43d1c45c41d1ebdf00f92c08fcde0f8f1f42013d357&ipo=images"
    />
    <Singleservice 
    type="Full Groom" 
    description="Full body brush out and detangle, warm water shampoo, conditioner, blow dry and full body haircut to breed specification or client request. (Includes nail dremel, ear pluck, anal gland expression if indicated)"
    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fdf%2F15%2F03%2Fdf1503b47cea854df1e74737d8953905.jpg&f=1&nofb=1&ipt=3a54fbe143c7ac330c1387d62677a2233babc7d29aadcdd37aea2a7496930ac3&ipo=images"
    />
    <Singleservice
    type="Doggy Daycare"
    description="Is your dog getting the exercise and socialization they need? Treat your dog to a fun and active day at our daycare and bring home a happy and pooped pooch!"
    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnewpawsibilities.com%2Fblog%2Fwp-content%2Fuploads%2F2023%2F10%2Ffb_2306936776233686_640x640.webp&f=1&nofb=1&ipt=19819a249aad9daad5f67e72a7a07d6a25f2134874b2376a126a6eb79cd3eea9&ipo=images" 
    />
    <Singleservice
    type="Boarding"
    description="Headed out of town but can’t take your pup with you? Though it would be wonderful to take our dogs with us, it’s not always feasible. We offer safe, fun, and trustworthy overnight dog boarding services. With us, your dog will enjoy a full day of play in our spacious play yards. We’ll make sure your dog is having the time of their life throughout their stay!"
    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhips.hearstapps.com%2Fedc.h-cdn.co%2Fassets%2F17%2F02%2F2048x2730%2Fgallery-1484169640-dog-boarding-pooch-hotel.jpg%3Fresize%3D768%3A*&f=1&nofb=1&ipt=c6e3afef637e7d0e6de907ba6b2360d36f738aece4dfd1e1fa94f01e9e693076&ipo=images" 
    />
    </div>
  )
}

