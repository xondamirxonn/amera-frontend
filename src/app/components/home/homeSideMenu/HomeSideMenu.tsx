import React from 'react'

import { categoryData } from '@/services/getCategory';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from 'next/link';
import { AiOutlineBars } from 'react-icons/ai';

export const HomeSideMenu = async () => {
  const category = await categoryData();
  return (
 <div>
    <div className="flex items-end gap-3">
            <AiOutlineBars size={28} />

            <h1 className="uppercase font-bold">Shop By Deparment</h1>
          </div>
          <div className="border border-b mt-2 mb-2"></div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              {category.results.map((item, index) => (
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  {item.children.length ? (
                    item.children.map((child) =>  (
                   
                      <AccordionContent
                        className={
                          item.children.length > 1 ? `border-t  w-full  ` : ""
                        }
                      >
                        <Link
                          href={`/subcategory/${child.id}`}
                          className="mt-2"
                        >
                     <h1 className='mt-3'>{child.title}</h1>
                        </Link>
                      </AccordionContent>
                    ))
                  ) : (
                    <AccordionContent>No subcategory</AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
 </div>
  )
}
