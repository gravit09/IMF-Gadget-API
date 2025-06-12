import { PrismaClient } from "../db/generated/prisma/index.js";

const prisma = new PrismaClient();

const codenames = [
  "The Nightingale",
  "The Kraken",
  "The Phoenix",
  "The Shadow",
  "The Viper",
  "The Falcon",
  "The Dragon",
  "The Ghost",
  "The Thunder",
  "The Storm",
];

export const getAllGadgets = async (req, res) => {
  try {
    const gadgets = await prisma.gadget.findMany();
    const gadgetsWithProbability = gadgets.map((gadget) => {
      const probability = Math.floor(Math.random() * 51) + 50;
      return {
        ...gadget,
        missionSuccessProbability: `${probability}% success probability`,
        displayName: `${gadget.name} - ${probability}% success probability`,
      };
    });
    res.status(200).json(gadgetsWithProbability);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createGadget = async (req, res) => {
  try {
    const randomCodename =
      codenames[Math.floor(Math.random() * codenames.length)];
    const gadget = await prisma.gadget.create({
      data: {
        ...req.body,
        codename: randomCodename,
      },
    });
    res.status(201).json(gadget);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getGadgetById = async (req, res) => {
  try {
    const gadget = await prisma.gadget.findUnique({
      where: { id: req.params.id },
    });
    if (!gadget) {
      return res.status(404).json({ message: "Gadget not found" });
    }
    res.status(200).json(gadget);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateGadget = async (req, res) => {
  try {
    const gadget = await prisma.gadget.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.status(200).json(gadget);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteGadget = async (req, res) => {
  try {
    const gadget = await prisma.gadget.update({
      where: { id: req.params.id },
      data: {
        status: "Decommissioned",
        decommissionDate: new Date(),
      },
    });
    res.status(200).json(gadget);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getGadgetByStatus = async (req, res) => {
  try {
    const gadgets = await prisma.gadget.findMany({
      where: { status: req.params.status },
    });
    res.status(200).json(gadgets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const selfDestructWithSequenceCode = async (req, res) => {
  try {
    const gadget = await prisma.gadget.update({
      where: { id: req.params.id },
      data: {
        status: "Destroyed",
        decommissionDate: new Date(),
      },
    });
    const sixDigitSequenceCode = Math.floor(100000 + Math.random() * 900000);
    res.status(200).json({
      message: "Gadget self-destructed successfully",
      sequenceCode: sixDigitSequenceCode,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
