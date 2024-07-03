# Next Short URL

## It is a react component compatible with next js to put external links in order to protect your site from attacks. This component creates a sort of barrier between the external site and your site to ensure great protection.

The component directly uses the vogzcorp API, https://vgz.vercel.app  
It automatically handles an API request to deliver unique links each time the site reloads. The links are completely temporary, possibly ranging from vgz.vercel.app/I6dsOq to vgz.vercel.app/9sVxP0, both redirecting to, for example, google.com. Automatic regeneration is managed by the API and prevents malicious actors from easily accessing a security breach

### Using the component

```TypeScript

import { ShortURL } from "vogzcorp-next-shorturl"
import { useState } from "react"
import Link from "next/link"

export const Component = () => {

  const [state, setState] = useState<number>(0)

  return (
    <div>
      <div onClick={() => setState(c => c + 1)}>
        Counter: {state}
      </div>
      <Link href="/">
        Home page
      </Link>
      <ShortURL url="https://google.com" target="_blank">
        External Link
      </ShortURL>
    </div>
  )

}

```

### Types of the element

```typescript
const ShortURL: ({
	url,
	target,
	protocol,
	className,
	children,
}: {
	url: string;
	target?: '_blank' | '_self' | '_parent' | '_top' | null;
	protocol?: boolean;
	className?: string;
	children?: React.ReactNode;
}) => React.JSX.Element;
```
