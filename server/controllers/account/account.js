import Account from "../../models/Account.js";

const apiv1AddAccount = async (req, res) => {
    const { accountType, handle, followers, subscribers, user } = req.body;

    if (!accountType || !handle || !user) {
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

const  apiV1AllAccounts = async (req, res) => {
    let accounts;

    try {
        accounts = await Account.find();
    } catch (error) {
        console.error("Error fetching accounts:", error);
        return res.status(500).json({ message: "Error fetching accounts" });
    }

    return res.status(200).json({ accounts });
};

const apiV1GetAccount = async (req, res) => {
    const { id } = req.params;
    let account;

    try {
        account = await Account.findById(id);
    } catch (error) {
        console.error("Error fetching account:", error);
        return res.status(500).json({ message: "Error fetching account" });
    }

    return res.status(200).json({ account });
}

const apiV1UpdateAccount = async (req, res) => {
    const { id } = req.params;
    const { accountType, handle, followers, subscribers, user } = req.body;

    let account;

    try {
        account = await Account.findById(id);
    } catch (error) {
        console.error("Error fetching account:", error);
        return res.status(500).json({ message: "Error fetching account" });
    }

    account.accountType = accountType;
    account.handle = handle;
    account.followers = followers;
    account.subscribers = subscribers;
    account.user = user;

    try {
        await account.save();
    } catch (error) {
        console.error("Error saving account:", error);
        return res.status(500).json({ message: "Error saving account" });
    }

    return res.status(200).json({ message: "Account updated successfully", account });
}
export {apiv1AddAccount, apiV1AllAccounts, apiV1GetAccount, apiV1UpdateAccount};
