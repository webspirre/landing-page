import React from "react";

interface SectionType {
  bgImg?: string;
}

interface ModalType {
  open: boolean;
  toogleModal(): void;
}

export type { SectionType, ModalType };
