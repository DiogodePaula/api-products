module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      uid: {
        type: Sequelize.UUID,
        allowNull: false,
        primarykey: true,
      },
      brand_uid: {
        type: Sequelize.UUID,
        references: {
          model: 'brands',
          key: 'uid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  },
};
