export const createNewClinicalTrial = async (req, res) => {
  try {
    const trial = await prisma.clinicalTrial.create({
      data: req.body,
    });
    res.status(201).json(trial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getClinicalTrials = async (req, res) => {
  try {
    const trials = await prisma.clinicalTrial.findMany();
    res.json(trials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateClinicalTrial = async (req, res) => {
  try {
    const trial = await prisma.clinicalTrial.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(trial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteClinicalTrail = async (req, res) => {
  try {
    await prisma.clinicalTrial.delete({
      where: { id: req.params.id },
    });
    res.json({ message: "Trial deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
