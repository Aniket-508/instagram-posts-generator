import {
  ERROR_CODES_MAP,
  PAYLOAD_FIELDS_MAP,
  RATE_LIMITING_HEADERS,
} from "@/lib/docs"
import { API_BASE_URL } from "@/lib/routes"
import { Badge } from "@/components/ui/badge"

function FieldList({ fields }: { fields: Record<string, string | number> }) {
  return (
    <ul className="list-inside list-disc space-y-2 text-muted-foreground">
      {Object.entries(fields).map(([key, description]) => (
        <li key={key}>
          <code className="rounded bg-accent px-2 py-1 text-sm text-accent-foreground">
            {key}
          </code>
          : {description}
        </li>
      ))}
    </ul>
  )
}

function DocsSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      {children}
    </section>
  )
}

export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">API Documentation</h1>
      <div className="space-y-8">
        <DocsSection title="Base URL">
          <div className="rounded border bg-accent p-2">
            <code className="text-accent-foreground">{API_BASE_URL}</code>
          </div>
        </DocsSection>
        <DocsSection title="Rate Limiting">
          <p className="mb-2 text-muted-foreground">
            All API endpoints are rate-limited to 100 requests per minute per IP
            address. Rate limit information is included in the response headers:
          </p>
          <FieldList fields={RATE_LIMITING_HEADERS} />
        </DocsSection>
        <DocsSection title="Endpoints">
          <div className="rounded border bg-accent p-2 text-accent-foreground">
            <div className="flex items-center gap-2">
              <Badge size="lg" variant={"destructive"}>
                POST
              </Badge>
              <code>/v1/images</code>
            </div>
          </div>
          <div className="my-2 flex items-center space-x-1 font-semibold">
            <span>Request Payload</span>
            <i className="text-xs font-light">
              (*Template level fields may vary)
            </i>
          </div>
          <FieldList fields={PAYLOAD_FIELDS_MAP} />
        </DocsSection>
        <DocsSection title="Error Handling">
          <p className="mb-2 text-muted-foreground">
            The API uses conventional HTTP response codes to indicate the
            success or failure of requests:
          </p>
          <FieldList fields={ERROR_CODES_MAP} />
        </DocsSection>
      </div>
    </div>
  )
}
