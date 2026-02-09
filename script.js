const academicProjects = [
  {
    title: "Real-Time Stop Sign Detection",
    meta: "On-device vision pipeline for stop-sign detection under strict real-time constraints.",
    href: "https://github.com/kiranj26/ECEN-5623-001-Real-Time-Embedded-Systems/tree/main/Final%20Project%20Real%20Time%20Stop%20Sign%20Detection",
  },
  {
    title: "Gesture Controlled Classroom",
    meta: "Gesture-driven classroom control prototype with embedded endpoints and responsive actuation.",
    href: "https://github.com/kiranj26/ECEN-5823-IOT-Embedded-Firmware/tree/main/Final%20Project%20Gesture%20Controlled%20Classroom",
  },
  {
    title: "USB Data Transfer: STM32F4 <-> AT89C51",
    meta: "Reliable multi-MCU USB communication bridge between STM32F4 and 8051 platforms.",
    href: "https://github.com/kiranj26/Embedded-System-Design-S22/tree/main/Final_Project/Data-Transfer-Between-STM32F4-and-AT89C51-Using-USB-Communication",
    previewHref:
      "https://github.com/kiranj26/Embedded-System-Design-S22/tree/main/Final_Project/Data-Transfer-Between-STM32F4-and-AT89C51-Using-USB-Communication#output",
    previewLabel: "Preview Output GIF",
  },
  {
    title: "Principles of Embedded Software Final Project",
    meta: "Firmware architecture capstone focused on modular drivers, timing behavior, and robustness.",
    href: "https://github.com/kiranj26/Principles-of-Embedded-Software-S22/tree/main/Final_Project",
  },
  {
    title: "Concurrent Containers",
    meta: "Thread-safe container implementation exploring synchronization strategy and scalability tradeoffs.",
    href: "https://github.com/kiranj26/Concurrent-Programming-Fall-2022/tree/main/FinalProject-ConcurrentContainers",
  },
];

const personalProjects = [
  {
    title: "TI F280039C CAN Library",
    meta: "Lightweight CAN library for TI F280039C focused on reusable APIs and clean integration.",
    href: "https://github.com/kiranj26/ti-f280039c-can-library",
  },
  {
    title: "ESP32-STM32 AT Command Interface",
    meta: "Cross-MCU AT command bridge enabling reliable command/control between ESP32 and STM32.",
    href: "https://github.com/kiranj26/ESP32-STM32-AT-Command-Interface",
  },
  {
    title: "C2000 Piccolo F28027F Projects",
    meta: "Focused firmware exercises for TI C2000 peripherals, control loops, and interface bring-up.",
    href: "https://github.com/kiranj26/C2000-Piccolo-F28027F-Projects",
  },
  {
    title: "Raspberry Pi Pico RP2040 Projects",
    meta: "RP2040 project set covering peripherals, timing behavior, and protocol integration patterns.",
    href: "https://github.com/kiranj26/Raspberry-Pi-Pico-RP2040-Projects",
  },
  {
    title: "STM32 Nucleo F401RE Projects",
    meta: "STM32F401RE embedded projects built around peripheral configuration and hardware interaction.",
    href: "https://github.com/kiranj26/STM32-Nucleo-F401RE-Projects",
  },
  {
    title: "CAN Log Parser",
    meta: "CAN log decoding and GUI-based visualization to speed up analysis and debugging workflows.",
    href: "https://github.com/kiranj26/CAN-Log-Parser",
    previewHref: "https://github.com/kiranj26/CAN-Log-Parser#gui-working-gif",
    previewLabel: "Preview GIF",
  },
];

const ossContributions = [
  {
    title: "PlatformIO STM32 Platform",
    meta: "Contributions to PlatformIO’s STM32 platform ecosystem used for embedded development workflows.",
    href: "https://github.com/platformio/platform-ststm32",
  },
  {
    title: "EmbeddedProto",
    meta: "Open-source contributions around protobuf-style messaging for resource-constrained embedded systems.",
    href: "https://github.com/Embedded-AMS/EmbeddedProto",
  },
  {
    title: "Adafruit Fingerprint Sensor Library",
    meta: "Contributed to embedded driver/library improvements in Adafruit’s fingerprint sensor stack.",
    href: "https://github.com/adafruit/Adafruit-Fingerprint-Sensor-Library",
  },
  {
    title: "MicroPython",
    meta: "Open-source contributions within the MicroPython ecosystem for embedded runtime and tooling.",
    href: "https://github.com/micropython/micropython",
  },
];

const engineeringFocus = {
  pillars: ["Real-Time MCU Firmware", "Hardware Bring-Up + Integration", "Communication + Connectivity", "Verification + Observability"],
  details: [
    "Builds firmware modules and integration flows on TI F28xx, STM32, and ESP32 platforms across academic and personal projects.",
    "Works close to hardware during bring-up, peripheral validation, and interface-level debugging.",
    "Implements microcontroller communication peripherals and connectivity stacks including CAN, LIN, UART/SCI, SPI, I2C, USB, BLE, TCP/IP, UDP, DoIP, and MQTT.",
    "Uses practical validation and debug tooling with CANoe/CANalyzer/CANdb++, GCC/GDB/Objdump, MATLAB/Simulink, and scripting support.",
  ],
};

const coreStack = {
  pillars: ["C/C++ + Learning Rust", "TI F28xx + STM32 + ESP32", "Microcontroller Communication Peripherals", "Embedded Toolchains"],
  details: [
    "Languages: C, C++, MATLAB scripting, Bash scripting; currently learning Rust.",
    "Hardware: STM32G0x/STM32F4x, ESP32, TI F28xx, ST SPCx, Renesas RH85, Jetson Nano, EFR32, Beaglebone Black, Raspberry Pi.",
    "Protocols and peripherals: SPI, I2C, UART/SCI, PWM, ADC/DAC, CAN, LIN, BLE, USB, TCP/IP, UDP, DoIP, MQTT, DMA.",
    "Tools: Code Composer Studio, SPC5-Studio, STMCube, Simplicity Studio, MATLAB/Simulink, Polyspace, EB Tresos, CANoe/CANalyzer/CANdb++, Doxygen, GCC/GDB/Objdump.",
  ],
};

const skills = [
  {
    title: "Language Skills",
    items: ["C", "C++", "Assembly", "Python", "M-Script (MATLAB Scripting)", "Bash Scripting"],
  },
  {
    title: "Hardware",
    items: [
      "STM32G0x",
      "ESP32",
      "TI F28xx",
      "ST SPCx",
      "Renesas RH85",
      "STM32F4x",
      "Jetson Nano",
      "EFR32 Blue Gecko",
      "Beaglebone Black",
      "Raspberry Pi",
    ],
  },
  {
    title: "Tools and Technologies",
    items: [
      "Code Composer Studio",
      "SPC5-Studio",
      "Espressif",
      "MCU-Express",
      "STMCube",
      "Simplicity Studio",
      "Simulink",
      "MATLAB",
      "Polyspace",
      "System Desk",
      "EB Tresos",
      "CANdb++",
      "CANalyzer",
      "CANoe",
      "Target-Link",
      "Doxygen",
      "Dhrystone",
      "GDB",
      "GCC",
      "Valgrind",
      "Objdump",
      "OCPP",
    ],
  },
  {
    title: "Protocols and Peripherals",
    items: [
      "SPI",
      "I2C",
      "UART",
      "SCI",
      "PWM",
      "ADC/DAC",
      "CAN",
      "LIN",
      "Bluetooth Low Energy (BLE)",
      "TCP/IP",
      "UDP",
      "USB",
      "DoIP",
      "MQTT",
      "DMA",
    ],
  },
];

function renderLinks(rootId, items) {
  const root = document.getElementById(rootId);
  if (!root) return;

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "link-item";
    card.innerHTML = `
      <span class="link-title">${item.title}</span>
      <span class="link-meta">${item.meta}</span>
    `;

    const links = document.createElement("div");
    links.className = "link-actions";

    const repoLink = document.createElement("a");
    repoLink.href = item.href;
    repoLink.target = "_blank";
    repoLink.rel = "noreferrer";
    repoLink.textContent = "Open Repo";
    links.appendChild(repoLink);

    if (item.previewHref) {
      const previewLink = document.createElement("a");
      previewLink.href = item.previewHref;
      previewLink.target = "_blank";
      previewLink.rel = "noreferrer";
      previewLink.textContent = item.previewLabel || "Preview";
      links.appendChild(previewLink);
    }

    card.appendChild(links);
    root.appendChild(card);
  });
}

function renderSkillGroups(rootId, groups) {
  const root = document.getElementById(rootId);
  if (!root) return;

  groups.forEach((group) => {
    const block = document.createElement("article");
    block.className = "skill-group";

    const head = document.createElement("div");
    head.className = "skill-head";

    const title = document.createElement("h3");
    title.textContent = group.title;

    const count = document.createElement("span");
    count.className = "skill-count";
    count.textContent = `${group.items.length} items`;

    head.appendChild(title);
    head.appendChild(count);

    const preview = document.createElement("div");
    preview.className = "skill-preview";

    group.items.slice(0, 6).forEach((item) => {
      const chip = document.createElement("span");
      chip.className = "skill-chip";
      chip.textContent = item;
      preview.appendChild(chip);
    });

    block.appendChild(head);
    block.appendChild(preview);

    if (group.items.length > 6) {
      const more = document.createElement("details");
      more.className = "skill-more";

      const summary = document.createElement("summary");
      summary.textContent = "Show full list";

      const moreList = document.createElement("div");
      moreList.className = "skill-more-list";

      group.items.forEach((item) => {
        const chip = document.createElement("span");
        chip.className = "skill-chip";
        chip.textContent = item;
        moreList.appendChild(chip);
      });

      more.appendChild(summary);
      more.appendChild(moreList);
      block.appendChild(more);
    }

    root.appendChild(block);
  });
}

function renderMetricPanel(pillarsId, detailsId, data) {
  const pillarsRoot = document.getElementById(pillarsId);
  const detailsRoot = document.getElementById(detailsId);
  if (!pillarsRoot || !detailsRoot) return;

  data.pillars.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "metric-chip";
    chip.textContent = item;
    pillarsRoot.appendChild(chip);
  });

  data.details.forEach((item) => {
    const row = document.createElement("li");
    row.textContent = item;
    detailsRoot.appendChild(row);
  });
}

renderLinks("academic-list", academicProjects);
renderLinks("personal-list", personalProjects);
renderLinks("oss-list", ossContributions);
renderMetricPanel("focus-pillars", "focus-details", engineeringFocus);
renderMetricPanel("core-pillars", "core-details", coreStack);
renderSkillGroups("stack-groups", skills);

document.querySelectorAll(".reveal").forEach((node, index) => {
  node.style.setProperty("--delay", `${index * 45}ms`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("on");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
