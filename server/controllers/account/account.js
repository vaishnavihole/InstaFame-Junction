import Account from "../../models/Account.js";

const apiv1AddAccount = async (req, res) => {
    const { accountType, handle, followers, subscribers, user } = req.body;

    if (!accountType || !handle || !followers || !user) {
        return res.status(400).json({ message: "Please provide all fields" });
    }

    let newAccount;

    try {
        newAccount = new Account({ accountType, handle, followers, subscribers, user });
        await newAccount.save();
    } catch (error) {
        console.error("Error saving account:", error);
        return res.status(500).json({ message: "Error saving account" });
    }

    return res.status(200).json({ message: "Account created successfully", account: newAccount });
};

export {apiv1AddAccount};
