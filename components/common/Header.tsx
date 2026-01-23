import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";

export default function Header() {
    return (
        <header>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}