import type { ReactNode } from "react";
import { Container } from "../../components/ui/container";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";

const informasiPribadi = [
  { label: "Nama Lengkap", value: "Abdurrahman Ichwan" },
  { label: "Tempat, Tanggal Lahir", value: "Malang, 28 Juni 2006" },
  { label: "Jenis Kelamin", value: "Laki-laki" },
  { label: "Status", value: "Mahasiswa" },
  { label: "Alamat", value: "Wonokerto, Kec. Bantur, Kab. Malang" },
  { label: "Email", value: "abdurrahmanichwan77@gmail.com" },
  { label: "No. Telepon", value: "+62 852-3643-5108" },
  { label: "Kewarganegaraan", value: "Indonesia" },
];

const keahlian = ["Drum", "Laravel", "mySQL", "JavaScript", "PHP", "TailwindCSS"];

export default function BiodataPage() {
  return (
    <main className="bg-surface flex min-h-dvh items-center justify-center px-4 py-16">
      <Container className="max-w-[720px] px-0">
        <div className="border-border bg-background overflow-hidden rounded-lg border shadow-smooth">
          <div className="border-border flex flex-col items-center gap-4 border-b px-8 py-12 text-center sm:px-12">
            <Avatar />
            <div>
              <p className="text-muted text-xs font-medium tracking-[0.2em] uppercase">
                Biodata
              </p>
              <h1 className="text-foreground mt-2 text-2xl font-bold">
                Abdurrahman Ichwan
              </h1>
              <p className="text-muted mt-1 text-sm">
                Mahasiswa di Universitas Brawijaya Kota Malang
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="blue" size="sm">
                Mahasiswa
              </Badge>
              <Badge variant="red" size="sm">
                Backend Developer
              </Badge>
              <Badge variant="green" size="sm">
                Drummer
              </Badge>
              <Badge variant="purple" size="sm">
                #WEAREMEMBERSHIP
              </Badge>
            </div>
          </div>

          <section className="px-8 py-8 sm:px-12">
            <SectionLabel>Informasi Pribadi</SectionLabel>
            <dl className="mt-5 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {informasiPribadi.map((item) => (
                <Field key={item.label} label={item.label} value={item.value} />
              ))}
            </dl>
          </section>

          <div className="border-border border-t" />

          <section className="px-8 py-8 sm:px-12">
            <SectionLabel>Tentang</SectionLabel>
            <p className="text-muted mt-4 text-sm leading-relaxed">
              Mahasiswa Universitas Brawijaya yang memiliki minat dalam pengembangan web, 
              khususnya di bidang backend development. Saya memiliki pengalaman dalam 
              menggunakan berbagai teknologi seperti Laravel, mySQL, dan JavaScript. 
              Selain itu, saya juga memiliki hobi bermain drum yang telah saya tekuni sejak lama, 
              dan pernah PKL di Sekretariat Presiden. 
            </p>
          </section>

          <div className="border-border border-t" />

          <section className="px-8 py-8 sm:px-12">
            <SectionLabel>Keahlian</SectionLabel>
            <div className="mt-4 flex flex-wrap gap-2">
              {keahlian.map((skill) => (
                <Badge key={skill} variant="outline" className="border-border border">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          <div className="border-border border-t" />

          <div className="flex flex-col gap-4 px-8 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-12">
            <p className="text-muted text-xs">
              Abdurrahman Ichwan — diperbarui Agustus 2026.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Unduh CV
              </Button>
              <Button size="sm">Hubungi</Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="bg-primary-70 h-1.5 w-1.5 rounded-full" />
      <h2 className="text-dark-40 text-xs font-semibold tracking-[0.15em] uppercase">
        {children}
      </h2>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted text-xs font-medium tracking-wide uppercase">
        {label}
      </dt>
      <dd className="text-foreground mt-1 text-sm">{value}</dd>
    </div>
  );
}

function Avatar() {
  return (
    <div className="border-primary-20 bg-primary-10/40 flex h-24 w-24 items-center justify-center rounded-full border">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary-70 h-10 w-10"
      >
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 19.5c1.4-3.6 4.1-5.4 7.5-5.4s6.1 1.8 7.5 5.4" />
      </svg>
    </div>
  );
}
