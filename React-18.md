# React 18

- [React v18.0 Official Documentation](https://react.dev/blog/2022/03/29/react-v18)

## Concurrent rendering

- Rendering is interruptible - can wait for DOM updates and resume or abandon rendering at all.
- Can restore state of unmounted component using `Offscreen` component - in the future.

## Suspense

### Changes in v.18

- Supported in data frameworks
- Added SSR support

### Core features

- Won't show fallback when suspense is triggered by transitions.
- In suspended state will cleanup layout effects and reapply them when suspension is finished.
- Triggered by: `lazy`, data-fetching frameworks integrated with `Suspense`, promise from `use`.

## Automatic batching

Added support not only for react events (v17) but **in promises, native event handlers, timeouts**.

## Transitions

Transitions - non-urgent updates that can be interrupted if an update with bigger priority exists.

- `useTransition`: Used to mark state updates as non-urgent, improving UI responsiveness.
- `startTransition`: A function used within useTransition to mark specific updates as transitions.
- `useDeferredValue`: Defers a value until the UI is less busy, preventing expensive computations from blocking the main UI thread.

```js
const [isPending, startTransition] = useTransition();

const handleStartTransition = () =>
const deferredValue = useDeferredValue(value);
```

Deferred value will 'lag behind' the latest value causing extra non-blocking rendering in background.

**Strict mode** - mounts and remounts component when applied

## API updates

### `react-dom/client`:

- `createRoot`
- `hydrateRoot`

### `react-dom/server`

Support streaming Suspense on server.
`renderToPipeableStream`- for Node
`renderToReadableStream` - for Deno
