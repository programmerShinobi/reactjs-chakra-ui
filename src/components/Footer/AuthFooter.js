/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Shinobi

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function AuthFooter(props) {
  return (
    <Flex
      flexDirection={{
        base: "column",
      }}
      alignItems={{
        base: "center",
      }}
      justifyContent='space-between'
      pb='20px'
      fontSize='sm'>
      <Text
        color='white'
        textAlign={{
          base: "center",
        }}
        mb={{ base: "20px" }}>
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as='span' mx='2px'>
          {document.documentElement.dir === "rtl"
            ? " مصنوع من ❤️ بواسطة"
            : " "}
        </Text>
        <Link href='https://github.com/programmerShinobi' target='_blank'>
          {document.documentElement.dir === "rtl"
            ? " توقيت الإبداعية"
            : "Programmer Shinobi "}
        </Link>
        &
        <Link href='https://codex-id.com/' target='_blank'>
          {document.documentElement.dir === "rtl" ? "سيممبل " : " Creative Tim"}
        </Link>
        {document.documentElement.dir === "rtl"
          ? "للحصول على ويب أفضل"
          : " Shinobi"}
      </Text>
      <List display='flex'>
        <ListItem
          me={{
            base: "20px",
          }}>
          <Link color='white' fontSize='sm' href='https://github.com/programmerShinobi'>
            {document.documentElement.dir === "rtl" ? "توقيت الإبداعية" : "GitHub"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
          }}>
          <Link color='white' fontSize='sm' href='https://codex-id.com/'>
            {document.documentElement.dir === "rtl" ? "سيممبل" : "codeX"}
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
          }}>
          <Link
            color='white'
            fontSize='sm'
            // href='#blog'
            href='https://www.showwcase.com/programmershinobi'>
            {document.documentElement.dir === "rtl" ? "مدونة" : "Blog"}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color='white'
            // href='#license'
            href='https://bit.ly/programmerShinobi'>
            {document.documentElement.dir === "rtl" ? "رخصة" : "Portfolio"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
