import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

const SidebarContext = React.createContext(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef(
  ({ children, defaultState = "expanded", ...props }, ref) => {
    const isMobile = useIsMobile()
    const [state, setState] = React.useState(defaultState)
    const [open, setOpen] = React.useState(true)
    const [openMobile, setOpenMobile] = React.useState(false)

    const toggleSidebar = () => {
      if (isMobile) {
        setOpenMobile((prev) => !prev)
      } else {
        setState((prev) => (prev === "expanded" ? "collapsed" : "expanded"))
      }
    }

    React.useEffect(() => {
      if (isMobile) {
        setState("collapsed")
        setOpen(false)
      } else {
        setOpenMobile(false)
        setOpen(true)
      }
    }, [isMobile])

    React.useEffect(() => {
      const handleKeyDown = (event) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      document.addEventListener("keydown", handleKeyDown)
      return () => {
        document.removeEventListener("keydown", handleKeyDown)
      }
    }, [toggleSidebar])

    return (
      <SidebarContext.Provider
        value={{
          state,
          open,
          setOpen,
          openMobile,
          setOpenMobile,
          isMobile,
          toggleSidebar,
        }}
      >
        <div
          ref={ref}
          className={cn("relative", props.className)}
          style={{
            width: isMobile
              ? "100%"
              : state === "expanded"
              ? SIDEBAR_WIDTH
              : SIDEBAR_WIDTH_ICON,
            transition: "width 0.3s ease-in-out",
          }}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    const { open, isMobile, openMobile, setOpenMobile } = useSidebar()

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile}>
          <SheetContent
            side="left"
            className={cn(
              "flex flex-col p-0",
              className
            )}
            style={{ width: SIDEBAR_WIDTH_MOBILE }}
            {...props}
          >
            {children}
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full flex-col",
          open ? "relative" : "hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    const { state, isMobile } = useSidebar()

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center",
          state === "expanded" ? "justify-between" : "justify-center",
          isMobile ? "p-4" : "p-3",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SidebarHeader.displayName = "SidebarHeader"

const SidebarBrand = React.forwardRef(
  ({ children, className, asChild, ...props }, ref) => {
    const { state, isMobile } = useSidebar()
    const Comp = asChild ? Slot : "div"

    return (
      <Comp
        ref={ref}
        className={cn(
          "flex items-center gap-2 font-semibold",
          state === "collapsed" && !isMobile && "hidden",
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
SidebarBrand.displayName = "SidebarBrand"

const SidebarContent = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-1 flex-col overflow-y-auto",
          isMobile ? "p-4" : "p-3",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-auto flex flex-col",
          isMobile ? "p-4" : "p-3",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SidebarFooter.displayName = "SidebarFooter"

const SidebarTrigger = React.forwardRef(
  ({ children, className, asChild, ...props }, ref) => {
    const { toggleSidebar, isMobile } = useSidebar()
    const Comp = asChild ? Slot : Button

    return (
      <Comp
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn("size-7", isMobile && "hidden", className)}
        onClick={toggleSidebar}
        {...props}
      >
        {children ?? <PanelLeft className="size-4" />}
      </Comp>
    )
  }
)
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarMobileTrigger = React.forwardRef(
  ({ children, className, asChild, ...props }, ref) => {
    const { toggleSidebar, isMobile } = useSidebar()
    const Comp = asChild ? Slot : Button

    return (
      <Comp
        ref={ref}
        variant="ghost"
        size="icon"
        className={cn("size-7", !isMobile && "hidden", className)}
        onClick={toggleSidebar}
        {...props}
      >
        {children ?? <PanelLeft className="size-4" />}
      </Comp>
    )
  }
)
SidebarMobileTrigger.displayName = "SidebarMobileTrigger"

const SidebarNav = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("flex flex-col gap-1", className)}
        {...props}
      >
        {children}
      </nav>
    )
  }
)
SidebarNav.displayName = "SidebarNav"

const sidebarNavItemVariants = cva(
  "flex items-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
        active:
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground",
      },
      size: {
        default: "h-9 px-3",
        icon: "size-9 justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const SidebarNavItem = React.forwardRef(
  (
    {
      children,
      className,
      variant = "default",
      size,
      tooltip,
      asChild,
      ...props
    },
    ref
  ) => {
    const { state, isMobile } = useSidebar()
    const Comp = asChild ? Slot : "a"

    const itemSize = isMobile ? "default" : state === "expanded" ? "default" : "icon"

    const item = (
      <Comp
        ref={ref}
        className={cn(
          sidebarNavItemVariants({ variant, size: size ?? itemSize }),
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    )

    if (tooltip && state === "collapsed" && !isMobile) {
      return (
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>{item}</TooltipTrigger>
            <TooltipContent side="right">
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    }

    return item
  }
)
SidebarNavItem.displayName = "SidebarNavItem"

const SidebarNavHeader = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    const { state, isMobile } = useSidebar()

    return (
      <div
        ref={ref}
        className={cn(
          "px-3 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground",
          state === "collapsed" && !isMobile && "hidden",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SidebarNavHeader.displayName = "SidebarNavHeader"

const SidebarNavHeaderTitle = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("truncate", className)} {...props}>
        {children}
      </div>
    )
  }
)
SidebarNavHeaderTitle.displayName = "SidebarNavHeaderTitle"

const SidebarSeparator = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { state, isMobile } = useSidebar()

    return (
      <Separator
        ref={ref}
        className={cn(
          "my-2",
          state === "collapsed" && !isMobile && "mx-auto w-4",
          className
        )}
        {...props}
      />
    )
  }
)
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarSearch = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { state, isMobile } = useSidebar()

    return (
      <Input
        ref={ref}
        placeholder="Search..."
        className={cn(
          "h-9",
          state === "collapsed" && !isMobile && "hidden",
          className
        )}
        {...props}
      />
    )
  }
)
SidebarSearch.displayName = "SidebarSearch"

const SidebarSkeleton = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { state, isMobile } = useSidebar()

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-2",
          isMobile ? "p-4" : "p-3",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "flex items-center",
            state === "expanded" ? "justify-between" : "justify-center"
          )}
        >
          {state === "expanded" && (
            <Skeleton className="h-6 w-2/5 rounded-md" />
          )}
          <Skeleton className="size-7 rounded-md" />
        </div>
        <div
          className={cn(
            "flex flex-col gap-1",
            state === "collapsed" && !isMobile && "items-center"
          )}
        >
          <Skeleton
            className={cn(
              "h-9 w-full rounded-md",
              state === "collapsed" && !isMobile && "size-9"
            )}
          />
          <Skeleton
            className={cn(
              "h-9 w-full rounded-md",
              state === "collapsed" && !isMobile && "size-9"
            )}
          />
          <Skeleton
            className={cn(
              "h-9 w-full rounded-md",
              state === "collapsed" && !isMobile && "size-9"
            )}
          />
        </div>
        <div className="mt-auto flex flex-col gap-1">
          <Skeleton
            className={cn(
              "h-9 w-full rounded-md",
              state === "collapsed" && !isMobile && "size-9"
            )}
          />
        </div>
      </div>
    )
  }
)
SidebarSkeleton.displayName = "SidebarSkeleton"

export {
  useSidebar,
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarBrand,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarMobileTrigger,
  SidebarNav,
  SidebarNavItem,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
  SidebarSeparator,
  SidebarSearch,
  SidebarSkeleton,
  sidebarNavItemVariants,
}
