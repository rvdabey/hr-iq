"use client";

import { useState } from "react";

const portals = {
  Owner: ["Group stability", "Turnover trend", "Branch comparison"],
  "HR Manager": ["Employee lifecycle", "Confidential cases", "Retention actions"],
  "Branch Manager": ["Staffing coverage", "Leave approvals", "Branch attendance"],
  "Department Manager": ["Department team", "Skills and training", "First-stage concerns"],
  Employee: ["My profile", "Leave and documents", "Raise a concern"],
} as const;

export default function Home() {
  const [portal, setPortal] = useState<keyof typeof portals>("HR Manager");
  const [uploadName, setUploadName] = useState("");
  return <main className="shell">
    <aside><div className="brand">MOSH <i /> <span>HR IQ</span></div><p>WORKSPACE</p><a className="active">Overview</a><a>People</a><a>Attendance</a><a>Leave</a><a>Documents</a><a>Data upload</a><p>WORKFORCE</p><a>Complaints & cases</a><a>Turnover</a><a>Performance</a><a>Development</a><a>Reports</a></aside>
    <section className="content">
      <header><span>Overview / September 2026</span><label>Portal <select value={portal} onChange={(e) => setPortal(e.target.value as keyof typeof portals)}>{Object.keys(portals).map((role) => <option key={role}>{role}</option>)}</select></label></header>
      <div className="heading"><div><small>CURRENT WORKSPACE</small><h1>{portal} portal</h1><p>{portals[portal].join(" · ")}</p></div><button>+ Add employee</button></div>
      <div className="metrics"><Metric label="Active team" value="—" note="Imported records will appear here" /><Metric label="Attendance today" value="New" note="Starting fresh in HR IQ" /><Metric label="Open cases" value="—" note="Confidential workflow enabled" /><Metric label="Turnover" value="Baseline" note="Measured after initial data" /></div>
      <section className="grid"><article className="panel"><small>DATA ONBOARDING</small><h2>Upload MOSH employee master</h2><p>Import the current employee sheet once. HR IQ will map locations, departments, managers and positions before anything is written to the database.</p><input type="file" accept=".xlsx,.xls,.csv" id="master" onChange={(event) => setUploadName(event.target.files?.[0]?.name ?? "")} /><label className="upload" htmlFor="master">Choose employee file</label>{uploadName && <strong className="ready">{uploadName} ready for mapping</strong>}<div className="mapping"><span>Salon locations <b>Ward Place · Ramada</b></span><span>Organisation locations <b>Head Office · DIBI</b></span></div></article><article className="panel"><small>FIRST PRODUCTION MODULE</small><h2>Employee complaints</h2><ol><li>Employee submits concern and evidence</li><li>Department Manager reviews or escalates</li><li>Branch Manager reviews unresolved cases</li><li>HR investigates, records action and closes</li></ol><p className="muted">A complaint about someone in the route automatically bypasses them.</p></article></section>
    </section>
  </main>;
}

function Metric({ label, value, note }: { label: string; value: string; note: string }) {
  return <article><span>{label}</span><strong>{value}</strong><small>{note}</small></article>;
}
