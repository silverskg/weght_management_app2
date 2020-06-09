class GraphsController < ApplicationController
  def index
    gon.weight_records = Graph.chart_data(current_user)
  end

  def create
  end

  def update
  end
  
end
