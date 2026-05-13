import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

/* ── Types matching the dashboard data model ── */

export type ProjectScreenshot = {
  src: string;
  alt: string;
};

export type ProjectAction = {
  href: string;
  label: string;
  kind?: "download" | "external" | "github";
};

export type FirestoreProject = {
  id: string;
  title: string;
  slug: string;
  category: string;
  year: number;
  shortDescription: string;
  fullDescription: string;
  projectType: string;
  clientType: "Client" | "Internal";
  role: string;
  image: string;
  primaryAction?: ProjectAction;
  secondaryAction?: ProjectAction;
  availabilityNote?: string;
  features: string[];
  challenge: string;
  solution: string;
  result: string;
  techStack: string[];
  screenshots: ProjectScreenshot[];
  featured: boolean;
  status: "Completed" | "Ongoing" | "Draft";
  createdAt?: number;
  updatedAt?: number;
};

/* ── Projects (read-only from website) ── */

const projectsCol = collection(db, "projects");

export async function getPublishedProjects(): Promise<FirestoreProject[]> {
  // Get all non-draft projects, ordered by creation date
  const q = query(
    projectsCol,
    where("status", "in", ["Completed", "Ongoing"]),
    orderBy("createdAt", "desc"),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FirestoreProject));
}

export async function getFeaturedProjects(): Promise<FirestoreProject[]> {
  const q = query(
    projectsCol,
    where("featured", "==", true),
    orderBy("createdAt", "desc"),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as FirestoreProject));
}

/* ── Contact submissions (write from website) ── */

const contactsCol = collection(db, "contacts");

export async function submitContact(data: {
  name: string;
  email: string;
  message: string;
}): Promise<string> {
  const docRef = await addDoc(contactsCol, {
    ...data,
    read: false,
    createdAt: Date.now(),
  });
  return docRef.id;
}
